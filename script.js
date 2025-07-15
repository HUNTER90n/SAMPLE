                        name: productCard.querySelector('h3').textContent,
                        type: productCard.querySelector('p.text-gray-600').textContent,
                        price: parseFloat(productCard.querySelector('p.font-bold').textContent.replace('$', '')),
                        image: productCard.querySelector('img').src,
                        quantity: 1,
                        size: '9', // Default size
                        color: 'black' // Default color
                    };
                    
                    addToCart(product);
                    
                    // Show cart sidebar
                    cartSidebar.classList.remove('translate-x-full');
                    overlay.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Initialize cart on page load
            updateCart();
            
            // Smooth scrolling for anchors
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>
