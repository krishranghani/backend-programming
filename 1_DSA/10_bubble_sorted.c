#include <stdio.h>
#include<stdlib.h>
#define n 10
int i,j,k;
int bubble(int a[n])
{
    for(i=0;i<10;i++)
    {
        for(j=0;j<n-1;j++)
        {
           if(a[j]>a[j+1])
          {
            k=a[j];
            a[j]=a[j+1];
            a[j+1]=k;
          }
        }
    }
}
int main()
{
    int a[n],i;

     for(int i=0;i<=n;i++)
    {
        a[i]=rand() % 100;
    }
    for(int i=0;i<n;i++)
    {
      printf("%d\t",a[i]);
    }
    bubble(a);
    for (int  i=0;i<n;i++)
    {
      printf("%d\t",a[i]);
    }
    
}