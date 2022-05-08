import React from 'react';

const About = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className='mt-6'>
                <h2 className='text-2xl text-lime-500'>1. Difference between javascript and nodejs</h2>
                <p>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight easy to learn syntax and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.</p>
            </div>
            <div className='mt-3'>
                <h2 className='text-2xl text-lime-500'>2. When should you use nodejs and when should you use mongodb</h2>
                <p>Node.js and MongoDB may seem complicated or time-consuming to master, but that is far from the truth. In this tutorial, we will show you how to use MongoDB and Node.js together in your web development projects.

                    You will also learn how to set up a server using Node.js and walk through establishing connections from Node.js to MongoDB databases. From there, you will learn how to select records using database calls and lastly, you will learn how to build and serve an HTML page with the data you retrieve. </p>
            </div>
            <div className='mt-3'>
                <h2 className='text-2xl text-lime-500'>3. What is the purpose of jwt and how does it work</h2>
                <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.</p>
            </div>
        </div>
    );
};

export default About;