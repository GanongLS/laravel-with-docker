<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogPostSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $posts = [
      [
        'title' => 'Hello dari Ganin',
        'content' => 'Selamat datang di Ganin. Ganin adalah sebuah usaha yang dibuat untuk memberdayakan siapapun yang menginginkannya. Kami berpegang pada prinsip bahwa dimana ada kemauan disitu ada jalan. Masih polos. Tapi fondasinya sudah benar.',
      ],
      [
        'title' => 'Kenapa Ganin Dibangun',
        'content' => 'Ganin dibangun sebagai platform yang tumbuh pelan, realistis, dan berakar pada kebutuhan nyata.',
      ],
      [
        'title' => 'Catatan Awal Pengembangan',
        'content' => 'Tulisan ini berisi catatan awal pengembangan sistem, keputusan teknis, dan prinsip kerja.',
      ],
    ];

    foreach ($posts as $post) {
      DB::table('blog_posts')->insert([
        'slug' => Str::slug($post['title']),
        'title' => $post['title'],
        'content' => $post['content'],
        'created_at' => now(),
        'updated_at' => now(),
      ]);
    }
  }
}
