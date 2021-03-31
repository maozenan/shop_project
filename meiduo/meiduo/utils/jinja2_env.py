from jinja2 import Environment

def jinja2_environment(**options):

    env = Environment(**options)

    env.globals.update({
        'static':staticfiles_storage,
        'url':reverse, 
    })

    return env