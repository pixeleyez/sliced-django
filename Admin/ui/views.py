from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from django.template import TemplateDoesNotExist


@login_required
def dynamic_template_ui_view(request, template_name):
    try:
        return render(request, f"ui/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/pages-404.html")
