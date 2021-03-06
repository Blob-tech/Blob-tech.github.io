import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/modules/library/service/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { config } from "src/conf";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  book;
  msg = null;
  language;
  imgUrl = config.host + "thumbnail/";
  docSrc = config.host + "article/";
  bookSrc = "";

  ngclass = "mat-video-responsive";


  constructor(private bookService : BookService,private _snackbar : MatSnackBar
    ,private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.getBookById(this.route.snapshot.paramMap.get('id'));
    this.bookSrc = this.docSrc + this.book.book_source;
    
  }

  openPDF(url)
  {
    window.open(url, '_blank');
  }

  getLangById(id : String)
  {
    this.bookService.getLangByID(id).subscribe(
      data=>{
        console.log(data);
        this.language = data;
      }
    )
  }

  getBookById(id : String)
  {
    this.bookService.getBookById(id).subscribe(
      data=>
      {
       
        this.book = data;
        
      },
      err=>{
        this._snackbar.open("Error in Loading the book with id :" + id,null,{duration : 5000});
      }

    )
  }
}
