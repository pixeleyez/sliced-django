from django.urls import path
from forms_tables.views import (
    dynamic_template_forms_tables_view,
)

app_name = "forms_tables"


urlpatterns = [
    path(
        "<str:template_name>/",
        dynamic_template_forms_tables_view,
        name="dynamic_template_forms_tables",
    ),
]
