<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AdminBlogController extends Controller
{
  public function index()
  {
    $posts = BlogPost::orderBy('created_at', 'desc')->get([
      'id',
      'title',
      'slug',
      'status',
      'created_at',
    ]);

    return Inertia::render('admin/blog/index', [
      'posts' => $posts,
    ]);
  }
  public function create()
  {
    return Inertia::render('admin/blog/create');
  }

  public function store(Request $request)
  {
    $data = $request->validate([
      'title' => ['required', 'string', 'max:255'],
      'content' => ['required', 'string'],
      'status' => ['required', 'in:draft,publish'],
    ]);

    $slug = Str::slug($data['title']);

    BlogPost::create([
      'title' => $data['title'],
      'slug' => $slug,
      'content' => $data['content'],
      'status' => $data['status'],
    ]);

    return redirect()->route('admin.blog.index');
  }
}
