from django.urls import path
from users.views import (
    dynamic_template_users_view,
)

app_name = "users"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_users_view,
        name="dynamic_template_users",
    ),
]
