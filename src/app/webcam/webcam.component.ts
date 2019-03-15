// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, SimpleChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';


declare var $:any;
@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

  /**
  * Prashansha
  * For webcam
  */
  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;
  public webcam_btn_text: any = "Take Photo";
  public dis: Boolean = true;
  public profilepic: any;

  constructor() {
    this.captures = [];
  }

  //This is to allow webcam display video
  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }
  ngOnInit() {
  }

  capture() {   
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures[0] = this.canvas.nativeElement.toDataURL("image/png");
    // this.appendFileAndSubmit(this.captures[0]);
  }
  b64toBlob(b64Data:any, contentType:any, sliceSize:any) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
  appendFileAndSubmit(arg:any){
    // Get the form
    var form = $("#myAwesomeForm");
    var ImageURL = arg;
    // Split the base64 string in data and contentType
    var block = ImageURL.split(";");
    // Get the content type
    var contentType = block[0].split(":")[1];// In this case "image/gif"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1];// In this case "iVBORw0KGg...."
    // Convert to blob
    this.profilepic=realData
    var blob = this.b64toBlob(realData, contentType,0);
    // Create a FormData and append the file
    var fd = new FormData(form);
    fd.append("uploadFile", blob);
    // Submit Form and upload file
    // var thiss = this;
    // $.ajax({
    //     url: "http://localhost:3000/upload",
    //     data: fd,// the formData function is available in almost all new browsers.
    //     type: "POST",
    //     contentType: false,
    //     processData: false,
    //     cache: false,
    //     dataType: "json", // Change this according to your response from the server.
    //     error: function (err) {
    //       console.error(err);
    //     },
    //     success: function (data) {
    //       console.log(data['fileid']);
    //       // this.profilepic = 'http://localhost:3000/image/' + data['fileid'];
    //      },
    //     complete: function () {
    //       // console.log("Request finished.");
    //     }
    // });
} 

}
