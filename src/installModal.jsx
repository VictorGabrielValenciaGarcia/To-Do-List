import React, { useEffect, useState } from 'react';
import logo from './logo.png';

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallPrompt, setShowInstallPrompt] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault(); // Previene el prompt nativo
            setDeferredPrompt(e); // Guarda el evento para usarlo más tarde
            setShowInstallPrompt(true); // Muestra tu propio mensaje
        };
    
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);
    
    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Muestra el prompt cuando el usuario hace clic
            const { outcome } = await deferredPrompt.userChoice;
    
            if (outcome === 'accepted') {
                console.log('PWA instalada');
            } else {
                console.log('El usuario rechazó la instalación');
            }
    
            setDeferredPrompt(null);
            setShowInstallPrompt(false); // Oculta tu mensaje
        }
    };
    

    const handleCancelClick = () => {
        setShowInstallPrompt(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'install-modal') {
            setShowInstallPrompt(false);
        }
    };

    if (!showInstallPrompt) {
        return null;
    }

    return (
        <div id="install-modal" onClick={handleOutsideClick}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-10/12 p-6 text-center bg-white rounded-lg shadow-lg md:w-4/12">
                <div className='p-2 mx-auto mb-2 -mt-16 bg-white rounded-full w-fit'>
                    <img src={logo} className="rounded-full size-20" alt="Home" />
                </div>

                <h2 className="mb-6 text-2xl font-semibold">Instala la Aplicación</h2>

                <div className="flex justify-between px-8 space-x-4">
                    <button onClick={handleInstallClick}
                        className="px-4 py-2 text-white transition bg-indigo-600 rounded hover:bg-indigo-800">
                        Instalar
                    </button>
                    <button onClick={handleCancelClick}
                        className="px-4 py-2 text-white transition rounded bg-stone-400 hover:bg-gray-500">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallPWA;
