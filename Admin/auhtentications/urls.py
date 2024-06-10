from django.urls import path
from auhtentications.views import (
    dynamic_template_authentications_view,
)

app_name = "authentications"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_authentications_view,
        name="dynamic_template_authentications",
    ),
]
