from locust import HttpUser, task


class WebsiteUser(HttpUser):
    @task(100)
    def go_load_test(self):
        self.client.get('http://localhost:3000/go/ping')

    @task(100)
    def node_load_test(self):
        self.client.get('http://127.0.0.1:3000/node/detail/account_detail')
