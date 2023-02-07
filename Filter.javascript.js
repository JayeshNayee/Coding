<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>

    function search_fun() {
      // lower lakhe too pan upper male and uppper lakhe too kaoi chita ja nahi
      let Filter = document.getElementById('myinput').value.toUpperCase();

      let mytable = document.getElementById('mytable');

      let tr = mytable.getElementsByTagName('tr');
    
      // for column 0 
      for(var i = 0;i<tr.length; i++)
      {
        let td =tr[i].getElementsByTagName('td')[0];

        if(td){
          let textvalue = td.textContent || td.innerHTML;

          if(textvalue.toUpperCase().indexOf(Filter) > -1){
            tr[i].style.display = "";
          }
          else{
            tr[i].style.display= "none";
          }
        }
      }     
    }
