from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from django.template import TemplateDoesNotExist


def dynamic_template_apps_view(request, template_name):
    try:
        return render(request, f"apps/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/404.html")
