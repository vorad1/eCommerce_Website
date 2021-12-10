import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import { auth, fs } from '../config/Config'

export const Home = (props) => {

    // getting current user uid
    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    const uid = GetUserUid();

    // getting current user function
    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        // retrieving user 
        useEffect(() => {
            //returns user 
            auth.onAuthStateChanged(user => {
                //  when user is returned, retrieve user from database1
                if (user) {
                    fs.collection('users').doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().FullName);
                    })
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }

    const user = GetCurrentUser();
    // console.log(user);

    // use state for products, is empty as we dont know how many products are there 
    const [products, setProducts] = useState([]);

    // getting products function
    // asynchronous function
    const getProducts = async () => {
        // calls data from products function, asynchronous as it takes time to complete the function
        const products = await fs.collection('Products').get();
        const productsArray = [];
        // snap is used to pre render the product components, when the webpage is loaded
        for (var snap of products.docs) {
            // document data gets saved in the variable
            var data = snap.data();
            data.ID = snap.id;
            // saving the products using push method
            productsArray.push({
                ...data
            })
            // when products array equals the products doc, fill the setproducts usestate 
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        }
    }

    // triggering the function using useeffect
    useEffect(() => {
        getProducts();
    }, [])

    // state of totalProducts
    const [totalProducts, setTotalProducts] = useState(0);
    // getting cart products   
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
                    const qty = snapshot.docs.length;
                    setTotalProducts(qty);
                })
            }
        })
    }, [])

    // global variable
    let Product;

    // add to cart
    const addToCart = (product) => {
        if (uid !== null) {
            // console.log(product);
            Product = product;
            Product['qty'] = 1;
            Product['TotalProductPrice'] = Product.qty * Product.price;
            // creates collection in firebase with cart + the user id of the person
            fs.collection('Cart ' + uid).doc(product.ID).set(Product).then(() => {
                console.log('successfully added to cart');
            })

        }
        else {
            props.history.push('/login');
        }

    }

    return (
        <>
            {/* passing the user in navbar */}
            <Navbar user={user} totalProducts={totalProducts} />
            <br></br>
            {/* if products lenght > 0 return all the products  */}
            {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Products</h1>

                    <div className='products-box'>
                        {/* rendering the state of the products and addtoCart */}
                        <Products products={products} addToCart={addToCart} />
                    </div>
                </div>
            )}
            {/* until products is rendered, the products will not show */}
            {products.length < 1 && (
                <div className='container-fluid'>Please wait....</div>
            )}
        </>
    )
}
