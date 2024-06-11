const products = [
	{
	  Name: 'Classic White Tee',
	  Image: 'images/white_tee.jpg',
	  Colour: 'White',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 15.99,
	  Quantity: 100
	},
	{
	  Name: 'Basic Black Tee',
	  Image: 'images/black_tee.jpg',
	  Colour: 'Black',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 15.99,
	  Quantity: 80
	},
	{
	  Name: 'V-Neck Red Tee',
	  Image: 'images/red_vneck.jpg',
	  Colour: 'Red',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 17.99,
	  Quantity: 70
	},
	{
	  Name: 'Blue Graphic Tee',
	  Image: 'images/blue_graphic.jpg',
	  Colour: 'Blue',
	  Type: 'Graphic',
	  Gender: 'Men',
	  Price: 20.99,
	  Quantity: 60
	},
	{
	  Name: 'Green Polo Tee',
	  Image: 'images/green_polo.jpg',
	  Colour: 'Green',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 25.99,
	  Quantity: 50
	},
	{
	  Name: 'Yellow Summer Tee',
	  Image: 'images/yellow_summer.jpg',
	  Colour: 'Yellow',
	  Type: 'Sleeveless',
	  Gender: 'Women',
	  Price: 14.99,
	  Quantity: 90
	},
	{
	  Name: 'Pink Kids Tee',
	  Image: 'images/pink_kids.jpg',
	  Colour: 'Pink',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 10.99,
	  Quantity: 120
	},
	{
	  Name: 'Striped Tee',
	  Image: 'images/striped.jpg',
	  Colour: 'Multi',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 18.99,
	  Quantity: 40
	},
	{
	  Name: 'Grey Long Sleeve',
	  Image: 'images/grey_long.jpg',
	  Colour: 'Grey',
	  Type: 'Long Sleeve',
	  Gender: 'Women',
	  Price: 22.99,
	  Quantity: 55
	},
	{
	  Name: 'Orange Kids Tee',
	  Image: 'images/orange_kids.jpg',
	  Colour: 'Orange',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 11.99,
	  Quantity: 110
	},
	{
	  Name: 'Purple Sports Tee',
	  Image: 'images/purple_sports.jpg',
	  Colour: 'Purple',
	  Type: 'Sports',
	  Gender: 'Women',
	  Price: 19.99,
	  Quantity: 65
	},
	{
	  Name: 'Brown Casual Tee',
	  Image: 'images/brown_casual.jpg',
	  Colour: 'Brown',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 16.99,
	  Quantity: 75
	},
	{
	  Name: 'Maroon V-Neck Tee',
	  Image: 'images/maroon_vneck.jpg',
	  Colour: 'Maroon',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 18.99,
	  Quantity: 50
	},
	{
	  Name: 'Sky Blue Kids Tee',
	  Image: 'images/skyblue_kids.jpg',
	  Colour: 'Sky Blue',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 95
	},
	{
	  Name: 'Dark Green Polo',
	  Image: 'images/darkgreen_polo.jpg',
	  Colour: 'Dark Green',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 24.99,
	  Quantity: 45
	},
	{
	  Name: 'White Graphic Tee',
	  Image: 'images/white_graphic.jpg',
	  Colour: 'White',
	  Type: 'Graphic',
	  Gender: 'Women',
	  Price: 21.99,
	  Quantity: 60
	},
	{
	  Name: 'Black Sports Tee',
	  Image: 'images/black_sports.jpg',
	  Colour: 'Black',
	  Type: 'Sports',
	  Gender: 'Men',
	  Price: 19.99,
	  Quantity: 70
	},
	{
	  Name: 'Lavender Long Sleeve',
	  Image: 'images/lavender_long.jpg',
	  Colour: 'Lavender',
	  Type: 'Long Sleeve',
	  Gender: 'Women',
	  Price: 23.99,
	  Quantity: 55
	},
	{
	  Name: 'Red Kids Tee',
	  Image: 'images/red_kids.jpg',
	  Colour: 'Red',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 13.99,
	  Quantity: 100
	},
	{
	  Name: 'Orange Casual Tee',
	  Image: 'images/orange_casual.jpg',
	  Colour: 'Orange',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 17.99,
	  Quantity: 75
	},
	{
	  Name: 'Pink Polo',
	  Image: 'images/pink_polo.jpg',
	  Colour: 'Pink',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 26.99,
	  Quantity: 50
	},
	{
	  Name: 'Navy Blue Kids Tee',
	  Image: 'images/navyblue_kids.jpg',
	  Colour: 'Navy Blue',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 90
	},
	{
	  Name: 'Grey Polo',
	  Image: 'images/grey_polo.jpg',
	  Colour: 'Grey',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 24.99,
	  Quantity: 55
	},
	{
	  Name: 'Green Graphic Tee',
	  Image: 'images/green_graphic.jpg',
	  Colour: 'Green',
	  Type: 'Graphic',
	  Gender: 'Women',
	  Price: 20.99,
	  Quantity: 60
	},
	{
	  Name: 'Black Long Sleeve',
	  Image: 'images/black_long.jpg',
	  Colour: 'Black',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 22.99,
	  Quantity: 65
	},
	{
	  Name: 'Yellow Kids Tee',
	  Image: 'images/yellow_kids.jpg',
	  Colour: 'Yellow',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 11.99,
	  Quantity: 110
	},
	{
	  Name: 'Blue Casual Tee',
	  Image: 'images/blue_casual.jpg',
	  Colour: 'Blue',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 16.99,
	  Quantity: 80
	},
	{
	  Name: 'White V-Neck Tee',
	  Image: 'images/white_vneck.jpg',
	  Colour: 'White',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 18.99,
	  Quantity: 70
	},
	{
	  Name: 'Purple Kids Tee',
	  Image: 'images/purple_kids.jpg',
	  Colour: 'Purple',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 95
	},
	{
	  Name: 'Grey Sports Tee',
	  Image: 'images/grey_sports.jpg',
	  Colour: 'Grey',
	  Type: 'Sports',
	  Gender: 'Men',
	  Price: 20.99,
	  Quantity: 60
	},
	{
	  Name: 'Red Polo',
	  Image: 'images/red_polo.jpg',
	  Colour: 'Red',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 25.99,
	  Quantity: 50
	},
	{
	  Name: 'Blue Long Sleeve',
	  Image: 'images/blue_long.jpg',
	  Colour: 'Blue',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 23.99,
	  Quantity: 55
	},
	{
	  Name: 'Green Kids Tee',
	  Image: 'images/green_kids.jpg',
	  Colour: 'Green',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 13.99,
	  Quantity: 100
	},
	{
	  Name: 'Pink Casual Tee',
	  Image: 'images/pink_casual.jpg',
	  Colour: 'Pink',
	  Type: 'Crew Neck',
	  Gender: 'Women',
	  Price: 17.99,
	  Quantity: 75
	},
	{
	  Name: 'Brown Polo',
	  Image: 'images/brown_polo.jpg',
	  Colour: 'Brown',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 24.99,
	  Quantity: 55
	},
	{
	  Name: 'Lavender Kids Tee',
	  Image: 'images/lavender_kids.jpg',
	  Colour: 'Lavender',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 90
	},
	{
	  Name: 'Orange Graphic Tee',
	  Image: 'images/orange_graphic.jpg',
	  Colour: 'Orange',
	  Type: 'Graphic',
	  Gender: 'Men',
	  Price: 19.99,
	  Quantity: 65
	},
	{
	  Name: 'Sky Blue Polo',
	  Image: 'images/skyblue_polo.jpg',
	  Colour: 'Sky Blue',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 26.99,
	  Quantity: 50
	},
	{
	  Name: 'Dark Blue Long Sleeve',
	  Image: 'images/darkblue_long.jpg',
	  Colour: 'Dark Blue',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 23.99,
	  Quantity: 55
	},
	{
	  Name: 'Yellow Kids Tee',
	  Image: 'images/yellow_kids_2.jpg',
	  Colour: 'Yellow',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 11.99,
	  Quantity: 110
	},
	{
	  Name: 'Blue Casual Tee',
	  Image: 'images/blue_casual_2.jpg',
	  Colour: 'Blue',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 16.99,
	  Quantity: 80
	},
	{
	  Name: 'Pink V-Neck Tee',
	  Image: 'images/pink_vneck.jpg',
	  Colour: 'Pink',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 18.99,
	  Quantity: 70
	},
	{
	  Name: 'Purple Kids Tee',
	  Image: 'images/purple_kids_2.jpg',
	  Colour: 'Purple',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 95
	},
	{
	  Name: 'Grey Sports Tee',
	  Image: 'images/grey_sports_2.jpg',
	  Colour: 'Grey',
	  Type: 'Sports',
	  Gender: 'Men',
	  Price: 20.99,
	  Quantity: 60
	},
	{
	  Name: 'Red Polo',
	  Image: 'images/red_polo_2.jpg',
	  Colour: 'Red',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 25.99,
	  Quantity: 50
	},
	{
	  Name: 'Blue Long Sleeve',
	  Image: 'images/blue_long_2.jpg',
	  Colour: 'Blue',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 23.99,
	  Quantity: 55
	},
	{
	  Name: 'Green Kids Tee',
	  Image: 'images/green_kids_2.jpg',
	  Colour: 'Green',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 13.99,
	  Quantity: 100
	},
	{
	  Name: 'Pink Casual Tee',
	  Image: 'images/pink_casual_2.jpg',
	  Colour: 'Pink',
	  Colour: 'Pink',
	  Type: 'Crew Neck',
	  Gender: 'Women',
	  Price: 17.99,
	  Quantity: 75
	}
  ]
  function addId(products){
	for(let i=0;i<products.length;i++){
		products[i].id=i+1;
	}
	console.log(products)
  }
  addId(products)