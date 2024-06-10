from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("dashboards.urls")),
    path("app/", include("apps.urls")),
    path("ui/", include("ui.urls")),
    path("authentication/", include("auhtentications.urls")),
    path("form-table/", include("forms_tables.urls")),
    path("layout/", include("layouts.urls")),
    path("page/", include("pages.urls")),
    path("user/", include("users.urls")),
    # all auth
    path("accounts/", include("allauth.urls")),
    path("accounts/", include("allauth.socialaccount.urls")),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
