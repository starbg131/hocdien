import pathlib
import sys
import webbrowser

if getattr(sys, "frozen", False) and hasattr(sys, "_MEIPASS"):
    app_dir = pathlib.Path(sys._MEIPASS)
else:
    app_dir = pathlib.Path(__file__).resolve().parent

page = app_dir / "index.html"
webbrowser.open(page.as_uri())
