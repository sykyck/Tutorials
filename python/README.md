# Flask React SPA

## Create Virtual environment
Commands -
- python -m venv pytutorials_env (Creates a virtual Environment)
- pytutorials_env\Scripts\activate (Activates the virtual Environment)
- pip install flask (Install Flask)
- pip install -r requirements.txt ()
- If any error occurs you have to first deactivate environment then remove the environment directories
    - deactivate (Deactivates Virtual environment)
    - rmdir /s /q pytutorials_env (Removes pytutorials_env virtual environment)
- pip freeze > requirements.in (generate requirements.in for dependencies)
- pip-compile requirements.in (generates requirements.txt )
- pip-sync (Installs the dependencies listed in requirements.txt)
## Full Documentation

Run `make docs` and browse to [http://localhost:5500](http://localhost:5500)

Sources are in the `/docs` folder.

FIXME: publish to GitHub Pages.

## IDE 

For Visual Code Install extension Pylance for Python IntelliSense experience

## License

MIT
