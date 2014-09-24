import os
from flask import Flask, render_template
from flask.ext import assets

controller = Flask(__name__)
env = assets.Environment(controller)

# Tell flask-assets where to look for our javascript and css files.
env.load_path = [
    os.path.join(os.path.dirname(__file__), 'css'),
    os.path.join(os.path.dirname(__file__), 'angular'),
    os.path.join(os.path.dirname(__file__), 'bower_components'),
]

env.register(
    'portofolio-script',
    assets.Bundle(
        'jquery/dist/jquery.js',
        'angular/angular.js',
        'angular-route/angular-route.js',
        'angular-ui-router/release/angular-ui-router.min.js',
        'angular-bootstrap/ui-bootstrap-tpls.min.js',
        'angular-ui-utils/ui-utils.js',
        'frontpage/frontpage-ctrl.js',
        'slideshow/slideshow.js',
        'portofolio.js',
        'frontpage/projects-ctrl.js',
        #filters='jsmin',
        output='portofolio-script.js'
    )
)



env.register(
    'portofolio-style',
    assets.Bundle(
        'bootstrap/dist/css/bootstrap.min.css',
        'portofolio.css',
        'navbar.css',
        'banner.css',
        'product.css',
        'projects.css',
        'about-us.css',
        'contact-us.css',
        #filters='cssmin',
        output='portofolio-style.css'
    )
)

@controller.route("/")
def index():
    return render_template('index.html')

if __name__ == '__main__':
    controller.run(debug=True)