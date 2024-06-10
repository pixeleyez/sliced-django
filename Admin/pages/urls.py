from django.urls import path
from pages.views import (
    dynamic_template_pages_view,
)

app_name = "pages"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_pages_view,
        name="dynamic_template_pages",
    ),
]
