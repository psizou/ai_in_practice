import requests
import pytest
from typing import List, Dict, Any

API_URL = "https://fakestoreapi.com/products"

def get_products() -> List[Dict[str, Any]]:
    """Fetch products from the API."""
    response = requests.get(API_URL)
    return response.json()

def find_defective_products(products: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Find products with defects based on validation rules."""
    defective_products = []
    
    for product in products:
        defects = []
        
        # Check if title is empty
        if not product.get('title'):
            defects.append("Empty title")
            
        # Check if price is negative
        if product.get('price', 0) < 0:
            defects.append("Negative price")
            
        # Check if rating.rate exceeds 5
        rating = product.get('rating', {})
        if rating.get('rate', 0) > 5:
            defects.append("Rating exceeds 5")
            
        if defects:
            product['defects'] = defects
            defective_products.append(product)
            
    return defective_products

def test_api_response():
    """Test API response status code."""
    response = requests.get(API_URL)
    assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"

def test_product_data_validation():
    """Test product data validation rules."""
    products = get_products()
    defective_products = find_defective_products(products)
    
    # Print defective products for inspection
    if defective_products:
        print("\nDefective Products Found:")
        for product in defective_products:
            print(f"\nProduct ID: {product.get('id')}")
            print(f"Title: {product.get('title')}")
            print(f"Price: {product.get('price')}")
            print(f"Rating: {product.get('rating', {}).get('rate')}")
            print(f"Defects: {', '.join(product['defects'])}")
    
    # Assert that all products pass validation
    assert len(defective_products) == 0, f"Found {len(defective_products)} products with defects"

if __name__ == "__main__":
    pytest.main([__file__, "-v"]) 