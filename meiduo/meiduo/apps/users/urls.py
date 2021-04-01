from django.conf.urls import url
# from users.views import RegisterView
from . import views

urlpatterns = [
    # 注册
    url(r'^register/$', views.RegisterView.as_view(), name='register'),
]