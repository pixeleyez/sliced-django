from django.urls import path
from layouts.views import (
    dynamic_template_layouts_view,
)

app_name = "layouts"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_layouts_view,
        name="dynamic_template_layouts",
    ),
]
