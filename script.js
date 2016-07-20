var l=1;
$(document).ready(function()
{
    $(".abc").click(function()
    {

        var table = document.getElementById("myTable");
        var row1=table.insertRow(0);
        row1.insertCell(0).innerHTML="POSTER";
        row1.insertCell(1).innerHTML="DETAILS";

    	var title=$(".textClass").val();
        $.ajax({
                	type:'GET',
                	url: 'http://www.omdbapi.com/?s='+title,	
                	dataType:'json',
        	success: function(jsonData)
        	{
    			obj=JSON.stringify(jsonData);
    			var json=$.parseJSON(obj);
    			json=json.Search;
        		$(json).each(function(i,val)
                {
            		$.each(val,function(k,v)
                    {

            			if(l!=json.length)
            			{
    	            		
    	            		var row = table.insertRow(l);

    						var cell1 = row.insertCell(0);
    						var cell2 = row.insertCell(1);
    						
    						var title = json[l].Title;
    						var YEAR = json[l].Year;
    						var imdbID = json[l].imdbID;
    						var Type = json[l].Type;
    						cell1.innerHTML = "<img src="+json[l].Poster+">";
                            cell2.innerHTML = "TITLE:"+title+"<br>YEAR:"+YEAR+"<br>imdbID:"+imdbID+"<br>Type:"+Type;
    						l=l+1;
    					}
            		
            		});
        		});
        	},
        	error: function()
        	{
        			alert('Error in Loading');
        	}
        });
    });
});