import React from 'react';


const ProfilePage: React.FC = () => {
    return (
        <div className="bg-gray-100 bg-center flex h-screen">
            <div className="p-8 max-w-3xl backdrop-blur-md">
                <h1 className="text-4xl font-bold mb-6">Hello there!</h1>

                <p className="text-2xl mb-8">
                    I'm <img src="../assets/ProfilePicture.png" className="inline-block rounded-full bg-purple-500 mr-2" />
                    <strong>Jonathan</strong> and I try to build cool stuff.
                </p>

                <p className="text-xl mb-9">
                    I’m an 18-year-old from Germany 🇩🇪 who codes as a hobby. Recently, I've been exploring language models and how they work.
                    I’m planning to study computer science soon and aim to keep improving so I can build some cool things.
                </p>

                <div className="flex space-x-6 text-lg">
                    <a href="#" className="hover:underline">discord</a>
                    <a href="https://github.com/TigaByte" className="hover:underline">github</a>
                    <a href="mailto:me" className="hover:underline">email</a>
                    <a ></a>
                </div>
            </div>

        </div>

    );
};

export default ProfilePage;