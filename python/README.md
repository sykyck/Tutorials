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

## Using uv (Use this one Popular and modern and easy)
- uv venv pytutorials_env --python 3.12 (Creates a virtual Environment)
- pytutorials_env\Scripts\activate (Activates the virtual Environment)
- uv pip compile requirements.in -o requirements.txt (generates requirements.txt )
- uv pip install -r requirements.txt (Install from the compiled file)
- When to recompile
  - Re-run compile when:
  - You add/remove a dependency
  - You want to upgrade versions
- uv pip compile requirements.in -o requirements.txt --upgrade
- to run a python script run command uv run filename.py

## Full Documentation

Run `make docs` and browse to [http://localhost:5500](http://localhost:5500)

Sources are in the `/docs` folder.

FIXME: publish to GitHub Pages.

## IDE 

For Visual Code Install extension Pylance for Python IntelliSense experience

## License

MIT
