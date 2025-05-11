import { useEffect, useState } from 'react';
import { useLoading } from '@/hooks/useLoading';
import LoadingScreen from '@/components/LoadingScreen';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { isLoading, progress, isFadingOut } = useLoading(); // Using our modified 3-second loading
  const { toast } = useToast();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && !loaded) {
      setLoaded(true);
      toast({
        title: "Welcome to ExpJeti Group",
        description: "Your travel experience begins now.",
        duration: 3000,
      });
    }
  }, [isLoading, loaded, toast]);

  return (
    <>
      {isLoading && <LoadingScreen progress={progress} isFadingOut={isFadingOut} />}
      
      <div className="min-h-screen bg-white">
        <header className="py-6 px-4 md:px-8 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0991d700-8063-47c0-a23a-c1623babb845.png" 
              alt="ExpJeti Group Logo" 
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-gray-600 font-medium">Home</a>
            <a href="#" className="text-black hover:text-gray-600 font-medium">About</a>
            <a href="#" className="text-black hover:text-gray-600 font-medium">Services</a>
            <a href="#" className="text-black hover:text-gray-600 font-medium">Contact</a>
          </nav>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </header>

        <main>
          <section className="py-20 px-4 md:px-8 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Global Travel Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-10">
              ExpJeti Group connects the world through innovative travel services, 
              providing seamless experiences for travelers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800">Discover Services</Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">Contact Us</Button>
            </div>
          </section>

          <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Global Transportation</h3>
                <p className="text-gray-600">Comprehensive solutions for air, land, and sea transportation needs.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Logistics Services</h3>
                <p className="text-gray-600">Strategic logistics planning and execution for seamless travel experiences.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Worldwide Network</h3>
                <p className="text-gray-600">Connected services across continents ensuring global reach and local expertise.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 px-4 md:px-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">ExpJeti Group</h4>
              <p className="text-gray-400">Connecting the world through innovative travel solutions since 2010.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Air Travel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Logistics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Global Network</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Corporate Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <address className="not-italic text-gray-400">
                <p>1234 Travel Avenue</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">contact@expjeti.com</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ExpJeti Group. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
