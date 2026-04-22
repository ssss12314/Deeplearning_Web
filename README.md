# Deep Learning

Static learning website project for explaining deep learning concepts with clear structure, diagrams, and curated references.

Start from [docs/PROJECT_PLAN.md](/Users/youtianshuo/projects/Deep_Learning/docs/PROJECT_PLAN.md).   

Current status:

- Project skeleton created
- Homepage refined around the local lecture archive
- First four learning paths mapped with curated support material
- Visual direction defined
- Topic pages are still in template stage

## Local course backbone

The homepage currently uses all nine local lecture PDFs as the course spine:

- `resource/lecture01_introduction.pdf`
- `resource/lecture02_math_foundations.pdf`
- `resource/lecture03_ml_basics.pdf`
- `resource/lecture04_training_practice.pdf`
- `resource/lecture05_pytorch_practice.pdf`
- `resource/lecture06_cnn_basics.pdf`
- `resource/lecture07_cnn_architectures.pdf`
- `resource/lecture08_rnn_sequence.pdf`
- `resource/lecture09_attention_transformer.pdf`

## Learning path supplements

The first four learning paths combine local PDFs with selected external references.

Path 01: Foundations

- 3Blue1Brown, Essence of Linear Algebra
- Dive into Deep Learning, Linear Algebra
- Dive into Deep Learning, Automatic Differentiation
- Stanford CS229, Linear Algebra Review
- Stanford CS229, Probability Review

Path 02: Neural Networks

- Michael Nielsen, How Backpropagation Works
- Stanford CS231n, Neural Network Case Study
- 3Blue1Brown, Neural Networks topic collection
- Dive into Deep Learning, Optimization
- Stanford CS229, Convex Optimization Overview

Path 03: Vision Models

- Stanford CS231n, Convolutional Networks
- Stanford CS231n, Understanding CNN Features
- Dive into Deep Learning, Convolutional Neural Networks
- PyTorch, Transfer Learning for Computer Vision

Path 04: Sequence Models

- Dive into Deep Learning, Recurrent Neural Networks
- Dive into Deep Learning, Modern Recurrent Neural Networks
- PyTorch, Seq2Seq Translation with Attention
- Dive into Deep Learning, Attention Mechanisms and Transformers
- Stanford CS224N, Deep Learning for NLP

## Current file map

- `index.html`: homepage
- `pages/topic-template.html`: reusable topic page scaffold
- `assets/css/style.css`: shared visual system
- `assets/js/main.js`: minimal page entrance behavior
- `docs/PROJECT_PLAN.md`: source of truth for project direction

## Next implementation targets

- Build the learning roadmap page
- Write the first two topic pages
- Replace placeholder topic copy with lecture-derived content
- Add custom diagrams for the first learning path
