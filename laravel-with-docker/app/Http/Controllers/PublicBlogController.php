<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPost;
use Inertia\Inertia;


class PublicBlogController extends Controller
{

  public function index()
  {
    $posts = BlogPost::where('status', 'publish')
      ->orderBy('created_at', 'desc')
      ->get([
        'id',
        'slug',
        'title',
        'content',
        'created_at',
      ]);

    return Inertia::render('blog/index', [
      'posts' => $posts,
    ]);
  }
  public function show(string $slug)
  {
    $post = BlogPost::where('slug', $slug)->where('status', 'publish')->firstOrFail();

    // sudah jadi Inertia response
    return Inertia::render('blog/show', [
      'post' => [
        'title' => $post->title,
        'content' => $post->content,
      ],
    ]);
  }
}
