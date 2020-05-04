<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function index(){
        $resuls = Category::all();
        return $resuls;
    }
    public function store(Request $request){
    $category = new Category();
    $category->name = $request->categoryName;
    $category->save();
    }

    public function destroy($id){
      
       
        $categoryId = Category::where('id',$id)->delete();

    }


}