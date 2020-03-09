<?php

namespace Bulkly;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable=[
        'title', 'body'
    ];
}
