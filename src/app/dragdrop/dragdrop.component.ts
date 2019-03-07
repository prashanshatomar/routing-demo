import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      var holder = document.getElementById('holder');
      holder.ondragover = function () { return false; };
      holder.ondrop = function (e) {

        e.preventDefault();
        var file = e.dataTransfer.files[0];

        var reader = new FileReader();
        reader.onload = function (event) {
          $('#image_droped').attr('src', event.target['result']);
        }
        reader.readAsDataURL(file);
        // var formData = new FormData();
        // formData.append('file', file);
        // $.ajax({
        //   url: "http://localhost:3000/upload",
        //   data: formData,// the formData function is available in almost all new browsers.
        //   type: "POST",
        //   contentType: false,
        //   processData: false,
        //   cache: false,
        //   dataType: "json", // Change this according to your response from the server.
        //   error: function (err) {
        //     console.error(err);
        //   },
        //   success: function (data) {
        //     self.adduserForm.controls['profile_pic'].setValue(data['fileid']);
        //     console.log(data['fileid']);
        //    },
        //   complete: function () {
        //     // console.log("Request finished.");
        //   }
        // });
      };
    });
  }

  drop(e:any){
    console.log("Request finished.");
    e.preventDefault();
    var file = e.dataTransfer.files[0];

    var reader = new FileReader();
    reader.onload = function (event) {
      $('#image_droped').attr('src', event.target['result']);
    }
    reader.readAsDataURL(file);
  }
  allowDrop(event:any){
    return false; 
  }

}
