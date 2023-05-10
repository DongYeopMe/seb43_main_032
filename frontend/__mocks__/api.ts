import { rest } from 'msw';
import users from './datas/users.json';
import { POST_STATE, PROJECTS } from './dummy/project';
import post from './datas/community.json';
import { DefaultObj } from '@/types/types';

export const handlers = [
  rest.get('/test', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: 'hi' }));
  }),
  rest.get('/users', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get('/users/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const user =
      typeof id === 'string' &&
      users.find((user) => user.MEMBER_ID === parseInt(id, 10));

    if (user) {
      return res(ctx.status(200), ctx.json(user));
    } else {
      return res(ctx.status(404), ctx.json({ error: 'User not found' }));
    }
  }),
  //프로젝트 관련
  rest.get('/project', async (req, res, ctx) => {
    const url = new URL(req.url);
    const size = Number(url.searchParams.get('size'));
    const page = Number(url.searchParams.get('page'));
    const total = PROJECTS.length;
    const data = PROJECTS.slice((page - 1) * size, page * size);
    return res(ctx.status(200), ctx.json({ data, total }));
  }),
  rest.get('/project/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const post_data = PROJECTS.find((project) => project.id === Number(id));
    const post_state = POST_STATE.find((project) => project.id === Number(id));
    return res(ctx.status(200), ctx.json({ post_data, post_state }));
  }),
  rest.post('/project/:id/job', async (req, res, ctx) => {
    const { id } = req.params;
    const data = await req.json();
    console.log(data.data);
    const post_data = PROJECTS.find((project) => project.id === Number(id));
    const job = post_data?.jobs.find((job) => Object.keys(job)[0] === data.job);
    if (data.update === 'want' && job) {
      const jobData = Object.values(job)[0];
      if (jobData.current < jobData.want) {
        jobData.current = jobData.current + 1;
      }
      const post_state = POST_STATE.find(
        (project) => project.id === Number(id)
      );
      if (post_state) {
        post_state.want = data.job;
      }
      return res(ctx.status(200));
    }
    if (data.update === 'cancle' && job) {
      const jobData = Object.values(job)[0];
      if (jobData.current > 0) {
        jobData.current = jobData.current - 1;
      }
      const post_state = POST_STATE.find(
        (project) => project.id === Number(id)
      );
      if (post_state) {
        post_state.want = '';
      }
      return res(ctx.status(200));
    }
  }),
  rest.post('/project/:id/heart', async (req, res, ctx) => {
    const { id } = req.params;
    const post_data = PROJECTS.find((project) => project.id === Number(id));
    const post_state = POST_STATE.find((project) => project.id === Number(id));
    if (post_state?.heart && post_data) {
      post_data.heart = post_data.heart - 1;
      post_state.heart = false;
      return res(ctx.status(200));
    }
    if (post_state?.heart === false && post_data) {
      post_data.heart = post_data.heart + 1;
      post_state.heart = true;
      return res(ctx.status(200));
    }
  }),
  rest.post('/project/:id/state', async (req, res, ctx) => {
    const { id } = req.params;
    const data = await req.json();
    const post_data = PROJECTS.find((project) => project.id === Number(id));
    if (Number(data.data) === 2 && post_data) {
      post_data.state = 2;
    }
    if (Number(data.data) === 3 && post_data) {
      post_data.state = 3;
    }
    return res(ctx.status(200));
  }),
];

// 게시글 조회 관련
//
//
//
//
//
export const postHandler = [
  rest.get('/community', async (req, res, ctx) => {
    const url = new URL(req.url);
    const size = Number(url.searchParams.get('size'));
    const page = Number(url.searchParams.get('page'));
    const start = (page - 1) * size;
    const end = page * size;
    const search = url.searchParams.get('search');

    let filteredData = post;
    if (search !== null) {
      filteredData = post.filter((p) => p.title.includes(search));
      console.log(search);
      console.log(filteredData);
    } else {
      filteredData = post;
    }

    const data = filteredData.slice(start, end);
    const total = filteredData.length;
    return res(ctx.status(200), ctx.json({ data, total }));
  }),

  rest.get('/community/:category', async (req, res, ctx) => {
    const url = new URL(req.url);
    const size = Number(url.searchParams.get('size'));
    const page = Number(url.searchParams.get('page'));
    const start = (page - 1) * size;
    const end = page * size;
    const filteredData = post.filter((p) => p.category === req.params.category);
    const search = url.searchParams.get('search');

    let data = filteredData;
    let total = filteredData.length;
    if (search) {
      data = filteredData.filter((p) => p.title.includes(search));
      total = data.length;
    }

    data = data.slice(start, end);
    return res(ctx.status(200), ctx.json({ data, total }));
  }),

  rest.get('/community/post/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const eachPost = post.find((project) => project.id === Number(id));
    return res(ctx.status(200), ctx.json({ eachPost }));
  }),

  rest.post('/community/create/', async (req, res, ctx) => {
    const id = post.length + 1;
    const data = await req.json();
  }),
];
