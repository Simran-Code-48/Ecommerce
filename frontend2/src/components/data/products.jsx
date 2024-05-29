const products = [
	{
	  Name: 'Classic White Tee',
	  Image: 'images/white_tee.jpg',
	  Colour: 'White',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 15.99,
	  Quantity: 100,
	  id: 1
	},
	{
	  Name: 'Basic Black Tee',
	  Image: 'images/black_tee.jpg',
	  Colour: 'Black',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 15.99,
	  Quantity: 80,
	  id: 2
	},
	{
	  Name: 'V-Neck Red Tee',
	  Image: 'images/red_vneck.jpg',
	  Colour: 'Red',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 17.99,
	  Quantity: 70,
	  id: 3
	},
	{
	  Name: 'Blue Graphic Tee',
	  Image: 'images/blue_graphic.jpg',
	  Colour: 'Blue',
	  Type: 'Graphic',
	  Gender: 'Men',
	  Price: 20.99,
	  Quantity: 60,
	  id: 4
	},
	{
	  Name: 'Green Polo Tee',
	  Image: 'images/green_polo.jpg',
	  Colour: 'Green',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 25.99,
	  Quantity: 50,
	  id: 5
	},
	{
	  Name: 'Yellow Summer Tee',
	  Image: 'images/yellow_summer.jpg',
	  Colour: 'Yellow',
	  Type: 'Sleeveless',
	  Gender: 'Women',
	  Price: 14.99,
	  Quantity: 90,
	  id: 6
	},
	{
	  Name: 'Pink Kids Tee',
	  Image: 'images/pink_kids.jpg',
	  Colour: 'Pink',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 10.99,
	  Quantity: 120,
	  id: 7
	},
	{
	  Name: 'Striped Tee',
	  Image: 'images/striped.jpg',
	  Colour: 'Multi',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 18.99,
	  Quantity: 40,
	  id: 8
	},
	{
	  Name: 'Grey Long Sleeve',
	  Image: 'images/grey_long.jpg',
	  Colour: 'Grey',
	  Type: 'Long Sleeve',
	  Gender: 'Women',
	  Price: 22.99,
	  Quantity: 55,
	  id: 9
	},
	{
	  Name: 'Orange Kids Tee',
	  Image: 'images/orange_kids.jpg',
	  Colour: 'Orange',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 11.99,
	  Quantity: 110,
	  id: 10
	},
	{
	  Name: 'Purple Sports Tee',
	  Image: 'images/purple_sports.jpg',
	  Colour: 'Purple',
	  Type: 'Sports',
	  Gender: 'Women',
	  Price: 19.99,
	  Quantity: 65,
	  id: 11
	},
	{
	  Name: 'Brown Casual Tee',
	  Image: 'images/brown_casual.jpg',
	  Colour: 'Brown',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 16.99,
	  Quantity: 75,
	  id: 12
	},
	{
	  Name: 'Maroon V-Neck Tee',
	  Image: 'images/maroon_vneck.jpg',
	  Colour: 'Maroon',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 18.99,
	  Quantity: 50,
	  id: 13
	},
	{
	  Name: 'Sky Blue Kids Tee',
	  Image: 'images/skyblue_kids.jpg',
	  Colour: 'Sky Blue',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 95,
	  id: 14
	},
	{
	  Name: 'Dark Green Polo',
	  Image: 'images/darkgreen_polo.jpg',
	  Colour: 'Dark Green',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 24.99,
	  Quantity: 45,
	  id: 15
	},
	{
	  Name: 'White Graphic Tee',
	  Image: 'images/white_graphic.jpg',
	  Colour: 'White',
	  Type: 'Graphic',
	  Gender: 'Women',
	  Price: 21.99,
	  Quantity: 60,
	  id: 16
	},
	{
	  Name: 'Black Sports Tee',
	  Image: 'images/black_sports.jpg',
	  Colour: 'Black',
	  Type: 'Sports',
	  Gender: 'Men',
	  Price: 19.99,
	  Quantity: 70,
	  id: 17
	},
	{
	  Name: 'Lavender Long Sleeve',
	  Image: 'images/lavender_long.jpg',
	  Colour: 'Lavender',
	  Type: 'Long Sleeve',
	  Gender: 'Women',
	  Price: 23.99,
	  Quantity: 55,
	  id: 18
	},
	{
	  Name: 'Red Kids Tee',
	  Image: 'images/red_kids.jpg',
	  Colour: 'Red',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 13.99,
	  Quantity: 100,
	  id: 19
	},
	{
	  Name: 'Orange Casual Tee',
	  Image: 'images/orange_casual.jpg',
	  Colour: 'Orange',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 17.99,
	  Quantity: 75,
	  id: 20
	},
	{
	  Name: 'Pink Polo',
	  Image: 'images/pink_polo.jpg',
	  Colour: 'Pink',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 26.99,
	  Quantity: 50,
	  id: 21
	},
	{
	  Name: 'Navy Blue Kids Tee',
	  Image: 'images/navyblue_kids.jpg',
	  Colour: 'Navy Blue',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 90,
	  id: 22
	},
	{
	  Name: 'Grey Polo',
	  Image: 'images/grey_polo.jpg',
	  Colour: 'Grey',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 24.99,
	  Quantity: 55,
	  id: 23
	},
	{
	  Name: 'Green Graphic Tee',
	  Image: 'images/green_graphic.jpg',
	  Colour: 'Green',
	  Type: 'Graphic',
	  Gender: 'Women',
	  Price: 20.99,
	  Quantity: 60,
	  id: 24
	},
	{
	  Name: 'Black Long Sleeve',
	  Image: 'images/black_long.jpg',
	  Colour: 'Black',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 22.99,
	  Quantity: 65,
	  id: 25
	},
	{
	  Name: 'Yellow Kids Tee',
	  Image: 'images/yellow_kids.jpg',
	  Colour: 'Yellow',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 11.99,
	  Quantity: 110,
	  id: 26
	},
	{
	  Name: 'Blue Casual Tee',
	  Image: 'images/blue_casual.jpg',
	  Colour: 'Blue',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 16.99,
	  Quantity: 80,
	  id: 27
	},
	{
	  Name: 'White V-Neck Tee',
	  Image: 'images/white_vneck.jpg',
	  Colour: 'White',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 18.99,
	  Quantity: 70,
	  id: 28
	},
	{
	  Name: 'Purple Kids Tee',
	  Image: 'images/purple_kids.jpg',
	  Colour: 'Purple',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 95,
	  id: 29
	},
	{
	  Name: 'Grey Sports Tee',
	  Image: 'images/grey_sports.jpg',
	  Colour: 'Grey',
	  Type: 'Sports',
	  Gender: 'Men',
	  Price: 20.99,
	  Quantity: 60,
	  id: 30
	},
	{
	  Name: 'Red Polo',
	  Image: 'images/red_polo.jpg',
	  Colour: 'Red',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 25.99,
	  Quantity: 50,
	  id: 31
	},
	{
	  Name: 'Blue Long Sleeve',
	  Image: 'images/blue_long.jpg',
	  Colour: 'Blue',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 23.99,
	  Quantity: 55,
	  id: 32
	},
	{
	  Name: 'Green Kids Tee',
	  Image: 'images/green_kids.jpg',
	  Colour: 'Green',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 13.99,
	  Quantity: 100,
	  id: 33
	},
	{
	  Name: 'Pink Casual Tee',
	  Image: 'images/pink_casual.jpg',
	  Colour: 'Pink',
	  Type: 'Crew Neck',
	  Gender: 'Women',
	  Price: 17.99,
	  Quantity: 75,
	  id: 34
	},
	{
	  Name: 'Brown Polo',
	  Image: 'images/brown_polo.jpg',
	  Colour: 'Brown',
	  Type: 'Polo',
	  Gender: 'Men',
	  Price: 24.99,
	  Quantity: 55,
	  id: 35
	},
	{
	  Name: 'Lavender Kids Tee',
	  Image: 'images/lavender_kids.jpg',
	  Colour: 'Lavender',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 90,
	  id: 36
	},
	{
	  Name: 'Orange Graphic Tee',
	  Image: 'images/orange_graphic.jpg',
	  Colour: 'Orange',
	  Type: 'Graphic',
	  Gender: 'Men',
	  Price: 19.99,
	  Quantity: 65,
	  id: 37
	},
	{
	  Name: 'Sky Blue Polo',
	  Image: 'images/skyblue_polo.jpg',
	  Colour: 'Sky Blue',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 26.99,
	  Quantity: 50,
	  id: 38
	},
	{
	  Name: 'Dark Blue Long Sleeve',
	  Image: 'images/darkblue_long.jpg',
	  Colour: 'Dark Blue',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 23.99,
	  Quantity: 55,
	  id: 39
	},
	{
	  Name: 'Yellow Kids Tee',
	  Image: 'images/yellow_kids_2.jpg',
	  Colour: 'Yellow',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 11.99,
	  Quantity: 110,
	  id: 40
	},
	{
	  Name: 'Blue Casual Tee',
	  Image: 'images/blue_casual_2.jpg',
	  Colour: 'Blue',
	  Type: 'Crew Neck',
	  Gender: 'Men',
	  Price: 16.99,
	  Quantity: 80,
	  id: 41
	},
	{
	  Name: 'Pink V-Neck Tee',
	  Image: 'images/pink_vneck.jpg',
	  Colour: 'Pink',
	  Type: 'V-Neck',
	  Gender: 'Women',
	  Price: 18.99,
	  Quantity: 70,
	  id: 42
	},
	{
	  Name: 'Purple Kids Tee',
	  Image: 'images/purple_kids_2.jpg',
	  Colour: 'Purple',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 12.99,
	  Quantity: 95,
	  id: 43
	},
	{
	  Name: 'Grey Sports Tee',
	  Image: 'images/grey_sports_2.jpg',
	  Colour: 'Grey',
	  Type: 'Sports',
	  Gender: 'Men',
	  Price: 20.99,
	  Quantity: 60,
	  id: 44
	},
	{
	  Name: 'Red Polo',
	  Image: 'images/red_polo_2.jpg',
	  Colour: 'Red',
	  Type: 'Polo',
	  Gender: 'Women',
	  Price: 25.99,
	  Quantity: 50,
	  id: 45
	},
	{
	  Name: 'Blue Long Sleeve',
	  Image: 'images/blue_long_2.jpg',
	  Colour: 'Blue',
	  Type: 'Long Sleeve',
	  Gender: 'Men',
	  Price: 23.99,
	  Quantity: 55,
	  id: 46
	},
	{
	  Name: 'Green Kids Tee',
	  Image: 'images/green_kids_2.jpg',
	  Colour: 'Green',
	  Type: 'Crew Neck',
	  Gender: 'Kids',
	  Price: 13.99,
	  Quantity: 100,
	  id: 47
	},
	{
	  Name: 'Pink Casual Tee',
	  Image: 'images/pink_casual_2.jpg',
	  Colour: 'Pink',
	  Type: 'Crew Neck',
	  Gender: 'Women',
	  Price: 17.99,
	  Quantity: 75,
	  id: 48
	}
  ]

export default products;