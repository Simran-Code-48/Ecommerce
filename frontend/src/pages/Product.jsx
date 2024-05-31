import React from 'react'
import '../components/CSS/Product.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';
const Product = () => {
  const dispatch = useDispatch();
  const {productId} = useParams();
  console.log({given:productId})
  const details = useSelector((state) =>
    state.products.products.find((product) => product.id === Number(productId))
  );
  console.log(details)
	const product = {
		name: 'Classic White Tee',
    image: '',
    color: 'White',
		type: 'Crew Neck',
		category: 'Men',
		price: 15.99,
		stock: 100,
		id: 1
	  }
    if (!product) {
      return <div>Loading...</div>; // or any other loading indicator
    }
  return (
	<div className="w-4/5 md:w-full grid grid-cols-1 md:grid-cols-2 py-10 lg:w-5/6 h-5/6 mx-auto">
      <div className="h-full w-full md:w-auto mb-10 md:mb-0">
        <img src={details.image} alt={details.name} className="mx-auto w-4/5 md:w-full lg:w-3/4 md:h-auto" />
      </div>
      <div className="h-full md:pl-9 flex flex-col justify-center lg:gap-3">
        <h1 className="text-3xl text-left font-semibold ">{details.name}</h1>
        <div>
        <p className='mb-3 mt-4'>Category :</p>
        <div className='flex '>
        <p className="bg-red-200 text-red-700 border-2 border-red-400 rounded-full px-5 w-fit mr-3">{details.color}</p>
        <p className="bg-red-200 text-red-700 border-2 border-red-400 rounded-full px-5 w-fit mr-3">{details.type}</p>
        <p className="bg-red-200 text-red-700 border-2 border-red-400 rounded-full px-5 w-fit mr-3">{details.category}</p>
        </div>
        </div>
        {/* <p className="bg-red-200 text-red-700 border-2 border-red-400 rounded-full px-5 w-fit">Available Quantity: {details.Quantity}</p> */}
        <p className="font-bold text-2xl text-gray-600 my-3">Rs. {details.price.toFixed(2)}</p>
        <div>
        <p>Description : </p>
		    <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        </div>
        <img className='w-[150px] m-0' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbIAAAB0CAMAAADXa0czAAAA81BMVEX////7sDv6nyrg4eP+/vz8/////v/8nir8rzv7sDn9/fz6///6oCre3+H9//z6sTv6mhb7pzP7qzX8rz7l5ujt7u/39/j6nyT6oi7+/fj5rTH6rSf7rjT89uj8+/L9//n73rH99uP75cH62af4xnP868/97Nb71Jr8s1z7vnf4yIv6oSP1u2r8miD5rUv748T3uEv62536u1z847z1tUD2uU76zIH+2KD5x3L7wGH47Mz33Kn9qyr+8eX605H6z4H8xYv7zZr6qkT7pjz3tmj406j+5c7+8er8xoP337H9r1b6zJP9yob7uWL8lwD1ngP/27oeWtNeAAAUbUlEQVR4nO1dCVfbOhZ2guVNRnISwLHj7CQsISQDFEpfYMrWxyvQ9v//mrlyNi+KLbDbM3PG973TnlPSr9Ld79WVIkkFFVRQQQUVVFBBBRVUUEEFFVRQQQUVVFBBBRVUUEEFFVRQQQUVVFBBBRVUUEEFFfT/TUQx5PzQZMAi8Iui5IUnG/CrkQ/anIih5Ir356mNkWwYOW0CWIwkhEh+eIZBEHZyZDKsDv8vi8xQ8N//dAYkL5YYBDu9XhcRkg8eMaRBp9NFeakAGNignyMe0N7uXk4uRYyQNLiYue5lG+WDZ+De1PXov1BOLCHo1Zs1aAflpAIGeXVnLu2hdj54EtrZ2t7a2ssJTYAU1KVeqUQbVzmJDPAaJarNejkpHu40alrNc4d5re+gQWu6Rrs54Um7ILCtrZ0/52mR9OJqNapT2kJSLlx+bdRKtZJ3lpNVOBclHVTKfc1jdbIitWhJK9Woe4DykZmxNafdXNCEqOlRTWM86eQjsaYLHAa82SAPNEnqzSiglUqzbg5gCkH9qsfWp9NWDnhAuwuRbeUDJ0JXXpWJrKZP20oehnFQpYwlNfdzDmDgBc50zReZ+5qDVYCRTT2NrU9z+7lY2dLItrb/UDSTiXOh13yr0Brn2TNfGbemms7MjJb0IeBlNFyiDGb+8gDvokkyrg/KD3Q+8+FKevWTI+eQNa6MbGsnM5YQyRIE97kjK1XPsrIE8NBfDarpvuOpXiI5q8gUvO8tWFyaXeGMaFDikesFHriBDs5eoEO6uKI/Y2YyBr/ji0zTa42BlHULSD7T5iKrUY3eZG6q4EVkhPVR7cLJiEcMMnAXEitR/VrOLrK9tcT+kJmRSWOpdHqpsS9l5TE6X+IBNQ4yRwt8u2KxVgKzyJwgffb0pchKbi97NNvZXovsD0Wzz9U1i6k3zAqHrgN41YvMSVnrQgvgfcpsFF2PrlRAq37OrAFBI9va/gN5viIN3TVHICJfkmybUL4EjAzy/L8UksVuWaSlQbweeN4MeAS/BvdbYuV5NkPb2QrRbzczEM9rSQ+wRHNvUBaZyWi/EmQxJGVShrpBVpxPWgCvVr1GRhYWkxs9sN2S7u1L2ULBXlhiv7+cNnCTegGWaDXvNpPSKUM34Mcg+szOs7BEIZMZDazPK7mDDHWIIaGrkJGVPLebrRO6GxHZ1u/tDstyGx3MQlvQ9VqW6OPgf3tBOKpr1ziLFqNrPSgyveRdftwxyjKU0ZRqwfWBimZZnxGVGJjZ72w1yrLSOtVLtQCPaxlbAk09aGRQN9DZIAseM9ogoq65GZq5fg0a2i+4xmYWu9jdjsnstzaHwU90wn6CdXHOHOejgDLuz2gEj57gj9bnCkGXIT/LzKz6cbMginzmhfFKeqOfwcyUmMB+c56PILhX9cgWSrMP1z4GMS5qYThW/w4/moAg0qReBK+k0yb+GJxktCeLRk9wgRcZZihikey3ldNLkaDeLLoDcD1nbWXxqXfuhaC/qnGWeJd4ifdOMvBBI6oCUIdcLdPy9wIa0puux3TK7SyOnD6gqDsckf2GPN+QWCsUUnmEpGs9JrJSqdHDCMH/BBlGwjZkefm7wfJuf9rjkxaHK3ldDD+b462UIAosr37CvCgxEMNrTePL07Vpyz/nkokhMq2iKIpMEFIU2NPAjeNRUFGmA2yFjvS+LnE0ww+ZWeZW3XopSMLIaTW7g87VpaZzeKxNv951vt20HDmhzARGrNpzCLUdhnfw6ukcHfDevt79Gt60DF+ssBSDsFmeMB5DUxZoyF9fr3+wX6Xx5ene293d+bDZmot1yZ0InrEEW+INz/sHZ9U4HJSiJ3O8FtNTXxmMGFyMncbe3u4u18ggadzd21Myj5eBRrLlOM0hcPby89nUm83cBnAk5nhAZJWxBTS6Pzw67k9gL2zfGAJScBFMc+GPAbDXP94/m+qNxsxzKU+LddtmeGZtjnfjVxE4EuAcX57A2W+wvutP1J3NPMDjsLik+3BW/f7t6PhpgYdC8Q1BLkzYb83ucNK/vXw7AzzX9TQOHuzXxxsxvBeG5/ii5tkbyMGX1M7O1jYQX2B+DgL/wafmsvugyBQ8uHo9Oau5jUYD1s4zhvUWTLXMyLZtJju7cnp4dNdzwoqHuufA2umFPmO88KB40nkWy/IPr1wO4ZmnhycvvfA4F0K928uzKVsfoHna5vXRUiWwvjHjNVvfJJjmgj07ndf9Od7M05P2q9MFns3Isn6OYL8nd9EDdWXPlxRII0FSHNnBp33RvV9w5JZJyvN0rVbSNI3L3CVVzTmLVSB/Lyrs5MfDTdAu0K3LeAtYOju0SVAAYLG6ACybpllWbfgfAE9DpYSzPwNFgnxVq1GuKaxVQKvMl1UGLIanmqoKmvAYaAEY6Oai0vCgkAdKhoP11RmUD8iAAa/M8I5CsWiPWU4G2n5nUgJOojdLXnhgC7Suljmk3jurwGaQc3E8zeTBmdZXvHJmWDqI1oeb8fSFJoWpbh2vG8aBY8x0PC8O5q/vVyBHQhui1nvoXYkNiOxyxgla/C1UuVuwy9Z6Jk2W9t1EQw2QXuGzxH5wVt09Qs68BEMNr6/CFVnZvl8NBSjkhpMablpfnbs+1ToKRAJ+avg+O3ufmYHIXNY/FNpDXeWahWoNVucyhJwI80TjG61ZNlurY5k2mro1weVp5Q0ie3CWbkAhXQ9ilBAc9TZs135E68JjL5NX/IjIZKkzKwnymG9kwOLKuhknoxdRq91gtOX66G1dpRF0O6OUn75ECCIZd3l162g1TKwQ5xOtCbqBCl9k9R9PgUZWvPv7fnpfAgLMua6KabHONwrw7U/rUgpJ3QvR4MP3O5CfDbCx5DFC3alHS+lM1ugGoy2PH4arPpsi44nHqTd4eNU6V2Jl69Ahco6e8f3n1aR17QrYBQWj4LDENFWQ2NpPyDIaTl0qoMeUH8nK9ugbCjY80M2UV4QJ4tVV+2EYOvdCE7cqsD5tw/pU67CF5WDOuJstY/zA0aeBnct4PzHOEQjGPC0e2b+wERQZwc3pLD38gFFwWWxVhogEWUJQ81ogCdU1LodN674b7mUbeECjhwo8qm6wsRMj2svOZmcfOaw2iHHr0jRD4xsZpHffpLYsBUQmE6n5xmsnRVjMjTzmuHaDiBPqwhGldV1NjbdcPLs8PmyFFADIYb5WT/O13DAALuVIIbH2ahaZfWi8AJis3KbqHW8LENntIaeNix3wtSksWTZSwjSu/Y2jd9lgfc5nL02lPK7bhjI6NkIK62tOqykBTa+WOVZmWsdt3hHfx2X2od4+2AUE5b9SUnNa5aVP1mkzPqovyw4iR8nxR+MXDBAn2jGOGMwPXMbPWsKAfLyjdvyED/aLW9cpeS2/yrfuwGnz+uHGBwvqDKcxMu64SZkUBc8e24Q5Pm0S3lQTkWTyOqtpm7micxJ8FWzC4R5NwT9ivDSSdIrlCtH1Ad4zf+CGKKj1ebY5B6GsWxk3MXXUR8aGQ15j5wM5yE6W8zNDRj1vc5uB6hyVY15H2TRxY0gHCbUDVKk8vGeuAvjHL22lP9vsaik3V/h5hzeMycnMbisb/QClvMCojn4ljN19QGaZJAZ7kKUB3djVjrduwOisI4fEDreWeIqB+p62KWngxnbrGG1gMUQzRPA/0cmGNXFLMquPpA1jbRAMJHLrbtguLfFSLducIJQ0E/Ze35j9aidBX8BV8LrbVOcp8c9nkjjQxHxtjavIvPzeNK0XnDhqYaBzV+MW1ZTbDLQ7mCSdSCntg02+EfDCG1ZHZbs+AKed2KfgzFRtpu2d7GONxMFQtPJEplfMeBxjkThx3grJULRyWcJrB9etJ2wkDnwD3oBqHCZTjYNnj3vISVYphK74eTJHA9QxFOSpk6jvkVkOEmMzH7h5Fm82gZuI5eOqPX5CspLMEqLgCY37Hg00IJbdqWATRjJL2JMhg4tYtxGYzpNYfYDklJF/x8CdhogGmCw17iKBF1x4Y1V8G9vNZ3QYiuDWW0xmtBpve6ij9Eud7IodGpSq0QCpVeK9u5Hdw07KUIXBItpwGjvtAg7H8OyHLmrLcqLIDDYR3fPi4TamAaY5+t6SFJEhG0GZ5XkNBrX3I2MQug4cjoqsMsFy2sggq/cI7n6KpPp6lRN4wOuQNJbM8ZpnURZDqhBdng3FBzJSRMbeUkLgayO+kdNaNMuPLSR47WdPKAnJ80YFQT03GOEptz9ufw+2FTcTY0p46Jj1x+McGT8jETj2+hUOH1JDZsRZ3/gFE5GLUGx91yEVoMtxjwCpdQu8tmh6JySyPC9UECinIhzhNYIeWpKYyOTIpS3KyWTUsn0IxYIQHkGfQ3PYLO5wVOpRwmIik1rhIWZ+59M+3lTMxEjs+CzPEVQS1jrfJji9RWsoibDYMAz8aY2nlTg6zODUelMRCRVgFa1p8EwZcs/4ObRZtu8dUZUaBhIQukFioFKKqMjEuo15iswITuGy3Im3BdUfWBEgqGNaur4K8IDHP9AoWzdCd1ZADF23tMrzudn9nJpiu5Wk81VvVdt0HgQbfmiJXjUTyz/yjGUoeNmWcZjHY9WE4COIN5itRQZhkTubASITUwFI88/XIgMOc08DGN5ECA8q7VdvrQC8sMjILFtD0afyxFog+d2nAJb8mt9n1iCR2mBjvtAOBRFRZ3E6CYAbzgx9Fn8VuoAJ61tkH5pG56nnhnPIOyTyBARUjmfeUmDcVHalAijpDkKAhCSW400zcDzLdxmoP5yzSWTlBzHPI6HLBUvWY6E8gvxDbH1k8agBpXoS3vhRKJZBHbro0IFG8Q/dFyI7FryAKTq8k1swYzmvtw4TCTyxBF+UIMvQqEXbdmEyhe70ynKLVld5UQKe+uCIiMxAw8bcbXNqjyAJqpT4iFxuwQxyXhYowCkm7wBE9iSmdk0/8NAkp+OzGFRAgMVt9q6F/6BSCp5p3oisjqC+37nmV3fB9VUEr6+KdqxyC2ayNGjMOZzgJPwt2M8iD0rI0hc2CMQyxSQTK/sqIGIVUsdvvlcBL3mBYvkHm7ut6fNMMXmBPwW9iugBTF4i83sVwOI0E2N0KFKoEOlqxvKEFP4yFn8VeWqWYEjwmAKk4tl3QtecEVR5i9IjRQV+CV055lyQ3kB55R8KenWZyqWzBPIPoQxq391QjYfJtE9Te5aS/26ZTisieONHoRSvqUMak+wTFyL7KnT5VnxsJ6f8Q5GdM91X4dAmxhZvD0OBLSjORdWvdsN4dgytrtotgb4rbvoKEPFh1jguMvW+JZAwoEkDgljkJMi24uuD/EPosqz4gH5e+QdqzSLsAF5aR8cj24z4StN6EmFJcxQxWBPwTh5jTFFVIRVAgyheuW6Pvh5Z9ijyx7Yt8gYI6o8i+1Xr4/rdG+ho+IDINistkUjAfYaAewk3t5RxYkUSe3N8OpFw9yjGZPtZAA79sqI+zDqdKGhyGsMTUgHpJbo+23ocImlwaEVMxRTKP9DbOLK80fi1iVDnwbJDP2D9D5H8iCOcXYMryVwOpVmZ0g/4QJNZRKXfZuPMePLdCvtL+7uIFr9YIU6qDA8TGbWu6swu1j80x88i8f3RXv8dsDcbFACzpwLawOQgj4HFLwJdQRLqAquwvschewVGcg5sOyQ00zoXeDaO8wbSfBFGfG4/p/MXdBJQfiax40W7VsFOpxpiv10XKH7J4RrPtNXx6LiJFJk15HHzdWQF+M9UIH0Tzr1tLmUCzsqqPPnfQODj3Y1AaCs81X4U2O9N0C/atnU/IYtEE3efwyHSOhbAi70NF7gfE7W0nPIPch8yiccuWqTeitxGrWM7mIcI9D+UdnkpMtM0x9bbDSJsQJ5NbCt4CCEtYGa2gAo0A3/DVpkC+JeaDP98uXn0c81k1X4QyD96ViBEW/U7Z9WZZDMQb8H1CXmV8LhOZExxLzzomE8wk7sjW50Xqab643SyXqR/Bo26JywEzatic/yUDjgcqebyeviP+wlCqxkq2X8v+z4QgkRaYJOV9wPPBz5s3YFhQwPoy/cfPh77N01boP9xu0heVeZjn5srO2df/USw/A84FnNhumpZQKUClrTNkUloyCAfkaGBtcy8wOc4OFrcYmlwyuIySwFM6yUd8HxlluNR32Fjm8sQLvuTF3J/tDKMHwL5wsHcN/sTT4PIfBdoFZbAe6/wvqXjHY3N+VsI5g9QgHXxzRRUURB2DkaW3y2Gz9gCR3oBkXAnqIyATHdy+a4Iecg2rJoj1Tr+W4qXtuwxms7DD9NmbzRYd+mAEyZgm+V1xy3OlykRhFqvluWrQF1EZB2LBR+7blU6bc4ptoER5A2Wn0iYloCVvTIrq/tBLD6kSBR27erZsqHUhl2M3mFl2xtHt9chLR+RSeQE+FdXxxB0sMGbtCUEt15sG7hWrqezRGlXwDHWWSIu4Xa8tS7LDkYspNXN+vhBoPHaegA3ZY+tlxb3hRs2aiJ1/SrNHL8J4A1/qvU6bOYOsg5O559dBUBfDn+Y5ZEtdKjrV9LbybP2C++Y20N/zbORZR322CgTVwcIgXgPTBlblYlIHTWoWwyPxTCFJzIDMmp5MoUP1QYCGSMa1qzx6JF9vRjvBJO9ctZG0pc3wDsVeQgZ/apY1uiZZTG8V/FlfxQTd04B70Skm+Lfwd1Jmyrdyy+UsUhDBk+Q6CavTkHDzqQZi3Rcap4/nTto47cyMSki5PSuOl2hwxzs9DqJ33ul+O/STZ6+tUWGNWTUPD9PbZMgZ/IUjZybyNgTeN9I2dvL8VSaIBBYapmPFCX5CsWKiIRx/JJfmJQ2wUr0duwmPAXjtGakYqD1iwaJxDwpSn9rjzHlv/XrOdm1KyP5/on/MShbBJ+QBwdG0r6SCdyZTDh+k0vgmtNYbBgGERWZQcAzp9kFfIp7dbOgHCnlVlFBBRVUUEEFFVRQQQUVVFBBBRVUUEEFFVRQQQUVVFBBBRVUUEEFFVRQQQUVVFBB/+v0H5UauPLiL8Q6AAAAAElFTkSuQmCC" alt="" />
        <button onClick={() => dispatch(addToCart(details))}
         className="bg-orange-500 font-semibold text-white px-5 py-3 rounded-xl hover:shadow-lg hover:bg-orange-700">Add to Cart</button>
      </div>
      
    </div>
  );
}

export default Product