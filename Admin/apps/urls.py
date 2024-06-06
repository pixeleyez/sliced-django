from django.urls import path
from apps.views import (
    dynamic_template_apps_view,
)

app_name = "apps"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_apps_view,
        name="dynamic_template_apps",
    ),
]
