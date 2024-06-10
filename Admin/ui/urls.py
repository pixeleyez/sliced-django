from django.urls import path
from ui.views import (
    dynamic_template_ui_view,
)

app_name = "ui"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_ui_view,
        name="dynamic_template_ui",
    ),
]
