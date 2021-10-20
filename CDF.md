# Cognite Data Fusion ( CDF )

---

## Using data from the client, the data journey

### 1. Extract and load

- First Step in using data from the client is extracting and loading it into CDF
- This will create a **copy** of the data inside CDF, a **copy** remains in the original source

### 2. Enhance

- Before the data is ready for consumption, we need to enhance it
- We find the extracted data in **Cognite RAW**, this is a staging area where the data is the same as the one extracted
- We then use the built-in CDF Transformations to transform data into Assets / Events / Time Series
- We then need to connect different kinds of data together, this is called **Contextualization**
- With the use of machine learning, powerful rules engine and domain expertise.
- One of the tools is and Entity Matcher to make connections between different kinds of data

### 3. Consume

- After staging, transforming and enchancing the data, we can the consume it to provide value.

---

## Use Case Data Modeling in CDF

Use Cases shape how we model data to create solutions

### CDF makes available resource types to help model the data

- Assets
- Events
- Time Series

Data is ingested into CDF and the split into Assets, Events and Time Series. Then this is fed into and Use Case, that help solve a business problem. If the data model supports the use case, the model is good otherwise is bad.

First Step is to understand the use case, then we can model the data.

### Use Case Requirements

#### Understand Data

1. Understand Data, Concepts and Attributes that are required for the use case, what it represents and how a business use will think about the data in relation to the use case
2. How these aspects relate to each other
3. What kind of queries we need to use and formalize them.

#### Model Use Case

#### Map The source systems to cdf resource types
