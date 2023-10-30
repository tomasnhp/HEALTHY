from flask import Flask

app = Flask(__name__)

# Establece la ubicación de las plantillas
app.template_folder = ''

# Ruta para la página principal
@app.route('/')
def index():
    return open('index.html', 'r').read()

if __name__ == '__main__':
    app.run(debug=True)
