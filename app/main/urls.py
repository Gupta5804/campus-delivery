from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from main.views import home
from upload.views import image_upload
from . import views

urlpatterns = [
    path("", home, name="home"),
    path("image_upload/", image_upload, name="upload"),
    path("api/hello", views.index.as_view(), name="index"),
    path("admin/", admin.site.urls),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
