import { ChevronDown, CircleChevronRightFill } from '@gravity-ui/icons';
import { Accordion } from '@heroui/react';
import React from 'react';

const categories = [
    {
        title: "Benefits of Pet Adoption",
        items: [
            {
                title: "Unconditional Love & Companionship",
                content: "Pets provide endless affection and emotional support, reducing stress and improving mental health.",
            },
            {
                title: "Encourages an Active Lifestyle",
                content: "Dogs especially motivate you to exercise regularly with walks, playtime, and outdoor activities.",
            },
            {
                title: "Save a Life",
                content: "Adoption directly saves animals from shelters and makes space for rescuing more animals in need.",
            },
            {
                title: "Strengthens Family Bonds",
                content: "Pets bring families together and teach children responsibility, empathy, and kindness.",
            }
        ],
    },
];

const WhyAdopt = () => {
    return (
        <div className='p-4'>
            <div className='max-w-4xl mx-auto space-y-4'>
                <h2 className='text-3xl font-bold'>Why Adopt a Pet?</h2>

                <p className=''>
                    Adopting a pet is one of the most rewarding decisions you can make. Not only do you gain a loyal companion, but you also save a life and make room for shelters to help other animals in need. Whether you&apos;re looking for unconditional love, a reason to stay active, or simply a furry friend to share your home, adoption offers countless benefits for both you and the animal.
                </p>

                <div>
                    {categories.map((category) => (
                        <div key={category.title}>
                            <Accordion className="w-full rounded-md" variant="surface">
                                {category.items.map((item, index) => (
                                    <Accordion.Item key={index}>
                                        <Accordion.Heading>
                                            <Accordion.Trigger className={'rounded-md'}>
                                                {item.title}
                                                <Accordion.Indicator>
                                                    <ChevronDown />
                                                </Accordion.Indicator>
                                            </Accordion.Trigger>
                                        </Accordion.Heading>
                                        <Accordion.Panel>
                                            <Accordion.Body>{item.content}</Accordion.Body>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyAdopt;