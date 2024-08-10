import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

// Create the main Hono app
const app = new Hono<{
  Bindings :{
    DATABASE_URL:string;
    JWT_SECRET: string,
  }
}>();
app.route("api/v1/user",userRouter)
app.route("api/v1/blog",blogRouter)


app.get('/', (c) => {
	return c.text('signin route')
})



export default app;
// postgresql://practicing_owner:3bejyUXZFxl7@ep-ancient-thunder-a5dci5rn.us-east-2.aws.neon.tech/practicing?sslmode=require


// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiY2Q2ZjU4MjYtNjUyOC00ZmFkLWI5MWUtMjRiZGU0OTRjYzk3IiwidGVuYW50X2lkIjoiZjI0NTFkOTQzYzY2OTliZjZiZDlmMTYwMjJiMDY4Y2JjMTY0MGY4MWFiMWIxMWYyNjNkMzM1NDU4NjVmNmI0MiIsImludGVybmFsX3NlY3JldCI6IjRiMGIzZTE1LWQ1YjUtNGE3MS04NDZmLWJkMzdjNmRlODBlNyJ9.w1dkBC0RJo5Fw8otZfNPL6CX7ex3wyrV9dzUuEwla6w"