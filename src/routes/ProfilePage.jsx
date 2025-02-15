import { useState } from "react";
import { Footer } from "../layouts/Footer";
import profileImg from "../assets/profile-image.jpg";
import { Camera, Mail, MapPin, Phone, Save, User, UserCircle } from "lucide-react";
import { useNotification } from "../contexts/NotificationContext";

const ProfilePage = () => {
  const { addNotification } = useNotification();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Nancy Gold",
    email: "nancygold@mail.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Frontend Developer",
    bio: "Experienced frontend developer with a passion for building intuitive and responsive user interfaces. I have been working in tech for over 8 years, specializing in developing dashboards and analytics platforms."
  });

  const [editedData, setEditedData] = useState({...profileData});

  const handleEditToggle = () => {
    if (isEditing) {

      setEditedData({...profileData});
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    setProfileData({...editedData});
    setIsEditing(false);
    addNotification("Profile information updated successfully");
  };

  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="title">My Profile</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="card col-span-1">
          <div className="card-body flex flex-col items-center">
            <div className="relative mb-6">
              <div className="size-32 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 shadow-lg">
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="size-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 shadow-md transition duration-200">
                <Camera size={16} />
              </button>
            </div>
            
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {profileData.name}
            </h2>
            <p className="mb-4 text-slate-500 dark:text-slate-400">{profileData.role}</p>
            
            <div className="mb-6 flex w-full flex-col gap-y-4">
              <div className="flex items-center gap-x-3 text-slate-600 dark:text-slate-400">
                <Mail size={18} className="text-blue-500" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center gap-x-3 text-slate-600 dark:text-slate-400">
                <Phone size={18} className="text-blue-500" />
                <span>{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-x-3 text-slate-600 dark:text-slate-400">
                <MapPin size={18} className="text-blue-500" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <button
              className={`w-full py-2.5 rounded-md font-medium transition duration-200 ${
                isEditing 
                  ? 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700'
              }`}
              onClick={handleEditToggle}
            >
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>
          </div>
        </div>
        
        {/* Right Column*/}
        <div className="card col-span-1 lg:col-span-2">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
              <UserCircle size={24} />
            </div>
            <p className="card-title">Profile Information</p>
          </div>
          
          <div className="card-body">
            {isEditing ? (
              <div className="flex flex-col gap-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    className="form-input rounded-md border border-slate-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 w-full transition duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    className="form-input rounded-md border border-slate-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 w-full transition duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={editedData.phone}
                    onChange={handleInputChange}
                    className="form-input rounded-md border border-slate-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 w-full transition duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="location" className="form-label text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={editedData.location}
                    onChange={handleInputChange}
                    className="form-input rounded-md border border-slate-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 w-full transition duration-200"
                    placeholder="Enter your location"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="role" className="form-label text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={editedData.role}
                    onChange={handleInputChange}
                    className="form-input rounded-md border border-slate-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 w-full transition duration-200"
                    placeholder="Enter your job title"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="bio" className="form-label text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={editedData.bio}
                    onChange={handleInputChange}
                    className="form-input rounded-md border border-slate-300 px-4 py-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 w-full resize-y transition duration-200"
                    placeholder="Tell us about yourself"
                  ></textarea>
                </div>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700 dark:text-white rounded-md py-2.5 mt-2 transition duration-200 flex items-center justify-center gap-x-2 font-medium"
                  onClick={handleSaveChanges}
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">About Me</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{profileData.bio}</p>
                </div>
                
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Personal Information</h3>
                  <div className="flex flex-col gap-y-4">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 py-2 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-medium text-slate-500">Full Name</div>
                      <div className="sm:col-span-2 text-slate-900 dark:text-slate-100">{profileData.name}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 py-2 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-medium text-slate-500">Email</div>
                      <div className="sm:col-span-2 text-slate-900 dark:text-slate-100">{profileData.email}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 py-2 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-medium text-slate-500">Phone</div>
                      <div className="sm:col-span-2 text-slate-900 dark:text-slate-100">{profileData.phone}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 py-2 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-medium text-slate-500">Location</div>
                      <div className="sm:col-span-2 text-slate-900 dark:text-slate-100">{profileData.location}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 py-2">
                      <div className="text-sm font-medium text-slate-500">Job Title</div>
                      <div className="sm:col-span-2 text-slate-900 dark:text-slate-100">{profileData.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="card col-span-1 lg:col-span-3">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
              <User size={24} />
            </div>
            <p className="card-title">Recent Activity</p>
          </div>
          
          <div className="card-body">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-start gap-x-4">
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Updated profile information</p>
                  <p className="text-sm text-slate-500">2 days ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-x-4">
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Changed profile picture</p>
                  <p className="text-sm text-slate-500">1 week ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-x-4">
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Account created</p>
                  <p className="text-sm text-slate-500">1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;