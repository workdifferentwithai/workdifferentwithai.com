WORK_BUILD_ENV ?= prod
WORK_REGISTRY_PRIV ?= hub.tnxs.net
WORK_REPO_NAME ?= workdifferentwithai.com
WORK_VERSION ?= 0.1.0
RUN_PORT = 0.0.0.0:3000

.PHONY: build push run

push:
	docker push $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):$(WORK_VERSION)
	docker push $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):latest


build:
	docker build -t web -f ./docker/Dockerfile \
		--tag $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):$(WORK_VERSION) \
		--tag $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):latest \
		.
	docker push $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):$(WORK_VERSION)
	docker push $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):latest

run:
	docker run -d -p $(RUN_PORT):3000 $(WORK_REGISTRY_PRIV)/work/web_$(WORK_BUILD_ENV):$(WORK_VERSION)
