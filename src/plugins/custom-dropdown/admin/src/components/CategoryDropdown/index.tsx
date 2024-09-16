import React, { useEffect, useState } from 'react';
import { Select, Option } from '@strapi/design-system';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
}

interface CategoryDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ value, onChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories'); // Adjust the endpoint if needed
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Select value={value} onChange={onChange}>
      {categories.map((category) => (
        <Option key={category.id} value={category.id}>
          {category.name}
        </Option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
