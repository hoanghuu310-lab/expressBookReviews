Command:
curl -X POST -d '{"username":"user1","password":"password"}' -H "Content-Type: application/json" http://localhost:5000/customer/login

Output:
{
  "message": "User successfully logged in",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcjEiLCJpYXQiOjE2Mj..."
}
