# server.py
import http.server
import socketserver

PORT = 9110

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
