import csv
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Gmail account credentials
gmail_user = 'brambletwist@gmail.com'  # Change this to your Gmail address
gmail_app_password = 'dybi chvb yymv jitk'  # Change this to your Gmail App Password

# Read CSV file
csv_file = 'email1.csv'  # Change this to your CSV file name
recipients = []
with open(csv_file, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        recipients.append(row[0])  # Assuming the email addresses are in the first column

# Email content
subject = 'Mark your Calendar: Join us for a day of native plants, snacks, and workshops!'
body = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grand Opening!</title>
<style>
  /* Styles for better email rendering */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #054950;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #054950;
    text-align: center;
  }
  p {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .btn {
    display: inline-block;
    background-color: #054950;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
  }

</style>
</head>
<body>
<div class="container">
  <h1>Welcome in Spring 2024 with Bramble Twist</h1>
  <p>We are excited to bring in this year's growing season with you.</p>
  <p>Introduce your family to ours on <strong>March 19, 2024</strong> for a day filled with native plants, baked snacks, and an evening of the Grow Along workshop!</p>
  <p>Don't miss out on this opportunity to shop our newest natives and place your orders. Come early and be the first to explore!</p>
  <p>See you there!</p>
  <p><strong>Bramble Twist</strong></p>
  <p><a href="http://brambletwist.com" class="btn">Visit Our Website</a></p>
  <p><a href="https://events.humanitix.com/bramble-sprouts-8r5hedp2?fbclid=IwAR0TmHi0z0vZ05sjQQWuWjqZ1Cmnqm6a1Pc4IJfP_AmANmvqiyvVO7uNmIc" class="btn">Register for the Grow Along Workshop</a></p>
</div>
</body>
</html>
"""

# Send emails
for recipient in recipients:
    # Set up email
    msg = MIMEMultipart()
    msg['From'] = gmail_user
    msg['To'] = recipient
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))

    try:
        # Connect to Gmail's SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        # Log in using App Password
        server.login(gmail_user, gmail_app_password)
        # Send email
        server.sendmail(gmail_user, recipient, msg.as_string())
        print(f'Email sent successfully to {recipient}')
        server.quit()
    except Exception as e:
        print(f'Failed to send email to {recipient}. Error: {str(e)}')
