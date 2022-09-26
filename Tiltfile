k8s_yaml('Tilt/namespace.yaml')
k8s_yaml('Tilt/devicemongo.yaml')
k8s_yaml('Tilt/usermongo.yaml')

docker_build('deviceservice', './device-service')
k8s_yaml('Tilt/deviceservice.yaml')
docker_build('userservice', './user-service')
k8s_yaml('Tilt/userservice.yaml')

docker_build('uiservice', './ui')
k8s_yaml('Tilt/ui.yaml')
k8s_resource('ui', port_forwards=80)