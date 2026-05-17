"""
Quiz App – local development server
Run:  python server.py
Then open http://localhost:8080/admin.html in your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

# Always serve from the directory this file lives in
ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)


class QuizHandler(http.server.SimpleHTTPRequestHandler):
    """Silent request handler – suppresses per-request log noise."""

    def log_message(self, format, *args):  # noqa: A002
        pass  # comment out to see request logs


def main():
    with socketserver.TCPServer(("", PORT), QuizHandler) as httpd:
        url = f"http://localhost:{PORT}/admin.html"
        print(f"Quiz App running → {url}")
        print("Press Ctrl+C to stop.\n")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)


if __name__ == "__main__":
    main()
